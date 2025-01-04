import ComparisionCompanyWidget from './ComparisionCompanyWidget';
import './CompareCompanyBox.css';
import { motion } from 'framer-motion';

export default function CompareCompanyBox({
  compareCompanies,
  onDeleteClick,
  onAddComparisionClick,
}) {
  const btnAddCompareCompanyClass = `primary-round-button-small ${
    compareCompanies.length < 5 ? '' : 'disable'
  }`;
  return (
    <div className="select-comparision-company">
      <div className="comparision-company-title">
        <div>
          <span>어떤 기업이 궁금하세요?</span>
          <span className="select-comparision-company-max">(최대 5개)</span>
        </div>
        <motion.div
          initial={{ scale: 1 }}
          whileTap={{ scale: 0.9 }}
          className={btnAddCompareCompanyClass}
          onClick={onAddComparisionClick}
        >
          기업 추가하기
        </motion.div>
      </div>
      <div className="company-box-comparision">
        {compareCompanies.map((company, index) => {
          return (
            <ComparisionCompanyWidget
              key={company.name}
              company={company}
              index={index}
              onDelete={onDeleteClick}
            />
          );
        })}
      </div>
    </div>
  );
}
