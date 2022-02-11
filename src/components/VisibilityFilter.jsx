import { useDispatch } from 'react-redux';
import { setImpAll, setImpImp, setImpNotImp } from '../reducers/filterReducer';

const VisibilityFilter = () => {
  const dispatch = useDispatch();

  const filterSelected = value => {
    switch (value) {
      case 'All':
        dispatch(setImpAll());
        break;
      case 'Important':
        dispatch(setImpImp());
        break;

      case 'Not important':
        dispatch(setImpNotImp());
        break;

      default:
        alert('NON');
        break;
    }
  }

  return (
    <>
      <span>All</span>
      <input type={'radio'} name='filter' onChange={() => filterSelected('All')} />

      <span>Imporant</span>
      <input type={'radio'} name='filter' onChange={() => filterSelected('Important')} />

      <span>Not important</span>
      <input type={'radio'} name='filter' onChange={() => filterSelected('Not important')} />
    </>
  );
}

export default VisibilityFilter;