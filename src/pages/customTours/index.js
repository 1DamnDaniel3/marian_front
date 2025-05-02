export { Custom } from './ui/Custom'
export {
    default as CustomReducer,
    setSelectedRegion, toggleActivity, stepUp,
    stepDown, setTravelDetails, resetCustomTour,
} from './model/CustomSlice'
export { selectSelectedActivities, selectSelectedRegion, selectStep, selectTravelDetails } from './model/CustomSelectors'