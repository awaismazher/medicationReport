import React from 'react';

export default class Modal extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            open: false
        }
    }
    toggle = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }))
    }
    render() {
    const {
        textDirection,
        btnMargin,
        footerCancel,
        footerOkLoading,
        footerOk,
        footerOkClick,
        modalBody
    } = this.props;
    const { open } = this.state;
    return(
        <Modal
            isOpen={open}
            toggle={this.toggle}
            backdrop={'static'}
            className="dr-modal"
        >
            <ModalHeader>
            <Icon type="check-circle" />
            <h5>{t('ARE_YOU_SURE?')}</h5>
            </ModalHeader>
            <ModalBody>
            <div className="row">
                <div className={`col ml-auto ${textDirection}`}>
                {modalBody}
                </div>
            </div>
            </ModalBody>
            <ModalFooter>
            <button
                className={`btn btn-white border px-3 ${btnMargin}`}
                onClick={this.toggle}
            >
                {footerCancel}
            </button>
            <button
                disabled={footerOkLoading}
                className="btn btn-primary px-3"
                onClick={footerOkClick}
                style={{ width: '25%' }}
            >
                {footerOkLoading && (
                <span>
                    <i
                    className="fa fa-circle-o-notch fa-spin"
                    style={{ marginRight: '10px' }}
                    />{' '}
                </span>
                )}
                {footerOk}
            </button>{' '}
            </ModalFooter>
        </Modal>
    )
    }
}