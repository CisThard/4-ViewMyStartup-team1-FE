import React from 'react';
import './InvestmentDeleteFailModal.css';

const InvestmentDeleteFailModal = ({ onClose }) => {
    return (
        <div className="ksh-investment-delete-fail-modal">
            <div className="ksh-investment-delete-fail-modal-section">
                <div className="ksh-investment-delete-fail-modal-close-button-section">
                    <button className="ksh-investment-delete-fail-modal-close-button" onClick={onClose}>X</button>
                </div>
                <div className="ksh-investment-delete-fail-modal-title-section">
                    <h1>잘못된 비밀번호로 삭제에 실패했습니다.</h1>
                </div>
                <div className="ksh-investment-delete-fail-modal-confirm-button-section">
                    <button className="ksh-investment-delete-fail-modal-confirm-button" onClick={onClose}>
                        확인
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InvestmentDeleteFailModal;