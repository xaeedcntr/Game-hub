import { Platform } from "../Interfaces/Reuseable";
import useData from "./useData"

export const usePlatforms=()=> useData<Platform>('/platforms/lists/parents');

export default usePlatforms