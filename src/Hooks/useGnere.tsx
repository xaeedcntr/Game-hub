import {  Genre} from '../Interfaces/Reuseable';
import useData from './useData';

const useGeners=()=> useData<Genre>('/genres');
export default useGeners