import './InvestmentDeleteModal.css';
import { useState } from 'react';
import { deleteInvestment } from '../apis/deleteInvestment_ksh';
import InvestmentDeleteFailModal from './InvestmentDeleteFailModal';

const InvestmentDeleteModal = ({ investment, onClose }) => {
    const [investmentPassword, setInvestmentPassword] = useState('');
    const [isInvestmentDeleted, setIsInvestmentDeleted] = useState(false);

    const handleSetPassword = (typedPassword) => {
        setInvestmentPassword(typedPassword);
    };

    const handleModalClose = () => {
        onClose();
    };

    const handleDeleteClick = async () => {
        try {
            if (!investment || !investment.id || !investmentPassword) {
                console.log("모든 항목 입력 필요");
                setIsInvestmentDeleted(true);
                return;
            }
            await deleteInvestment({ id: investment.id, password: investmentPassword });
            setIsInvestmentDeleted(false);
            handleModalClose();
        } catch (error) {
            setIsInvestmentDeleted(true);
        }
    };


    if (isInvestmentDeleted) {
        return <InvestmentDeleteFailModal onClose={handleModalClose} />;
    }

    return (
        <div
            className="ksh-investment-delete-modal"
            onClick={(e) => e.stopPropagation()}
        >
            <div className="ksh-investment-delete-modal-section">
                <div className="ksh-investment-delete-modal-top-section">
                    <p>삭제 권한 인증</p>
                    <button className="ksh-investment-delete-modal-close-button" onClick={onClose}>X</button>
                </div>
                <div className="ksh-investment-delete-modal-middle-section">
                    <p>비밀번호</p>
                    <input
                        type="password"
                        placeholder="비밀번호를 입력해주세요"
                        defaultValue={investmentPassword}
                        onBlur={(e) => handleSetPassword(e.target.value)}
                    />
                </div>
                <div className="ksh-investment-delete-modal-bottom-section">
                    <button className="ksh-investment-delete-modal-confirm-button" onClick={handleDeleteClick}>
                        확인
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InvestmentDeleteModal;
