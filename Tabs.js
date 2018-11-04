import React from 'react';

export default ({
  tabs,
  reportExists,
  snapshotReport,
  suggestedMedication,
  reportId,
  contentSuggested,
  NoteInCard,
  content,
  previousData,
  contentPrevious,
  currentStatus

}) => {
  return(
  <div className="row mb-5">
    <div className="col">
      <div className="card border rounded">
        <div className="card-header text-primary pb-0 pt-2">
          <div className="col px-0">
            <ul
              className="nav nav-tabs border-bottom-0 flex-nowrap w-100 ovy-h ovx-a"
              id="myTab"
              role="tablist"
            >
              {tabs &&
                tabs.map(tab => {
                  const className =
                    tab.id === activeTab ||
                      ((tab.id === 2 && activeTab === 1 && !suggestedMedication) ||
                        (reportExists &&
                          snapshotReport &&
                          tab.id === 2))
                      ? 'nav-link active'
                      : 'nav-link text-muted';
                  if (
                    tab.id === 2 ||
                    (tab.id === 3 && previousData) ||
                    (tab.id === 1 &&
                      suggestedMedication &&
                      suggestedMedication.medications &&
                      suggestedMedication.medications.length >= 0)
                  ) {
                    const tabClass =
                      !reportId &&
                        store.getState().auth.userDetails.roles[0] === 'ROLE_DOCTOR' &&
                        tab.id === 1
                        ? 'nav-item text-nowrap d-none'
                        : 'nav-item text-nowrap';
                    return (
                      <li className={tabClass} key={tab.id}>
                        <a
                          className={className}
                          data-toggle="tab"
                          role="tab"
                          aria-selected="true"
                          onClick={event => {
                            this.setState({ activeTab: tab.id });
                          }}
                        >
                          {t(tab.text)}
                        </a>
                      </li>
                    );
                  } else {
                    null;
                  }
                })}
            </ul>
          </div>
        </div>
        {!reportId &&
          store.getState().auth.userDetails.roles[0] === 'ROLE_DOCTOR' ? null : (
            <div
              style={{ height: '165px' }}
              className={
                activeTab === 1 && suggestedMedication && !snapshotReport
                  ? 'tab-pane fade show active d-md-flex flex-md-nowrap ovx-a'
                  : 'tab-pane fade hide'
              }
            >
              {contentSuggested}
              {!contentSuggested && (
                <div className="col-12">
                  <p className="text-muted mt-3 mb-0">{NoteInCard}</p>
                </div>
              )}
            </div>
          )}

        <div
          style={{ height: '165px' }}
          className={
            activeTab === 2 ||
              (activeTab === 1 && !suggestedMedication) ||
              snapshotReport
              ? 'tab-pane fade show active d-md-flex flex-md-nowrap ovx-a'
              : 'tab-pane fade hide'
          }
        >
          {content}
          {!content && (
            <div className="col-12">
              <p className="text-muted mt-3 mb-0" />
            </div>
          )}
        </div>
        {previousData && (
          <div
            style={{ height: '165px' }}
            className={
              activeTab === 3
                ? 'tab-pane fade show active d-md-flex flex-md-nowrap ovx-a'
                : 'tab-pane fade hide'
            }
          >
            {contentPrevious}
            {!contentPrevious && (
              <div className="col-12">
                <p className="text-muted mt-3 mb-0" />
              </div>
            )}
          </div>
        )}
        <div className="card-footer bg-white text-right">
          {currentStatus}
        </div>
      </div>
    </div>
  </div>
)
}