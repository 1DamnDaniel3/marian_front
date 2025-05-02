import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedRegion: null,
    selectedActivities: {},
    travelDetails: {},
    step: 0,
};

const CustomSlice = createSlice({
    name: 'custom',
    initialState,
    reducers: {
        setSelectedRegion(state, action) {
            state.selectedRegion = action.payload;
        },
        toggleActivity(state, action) {
            const {id, name} = action.payload;
            if (state.selectedActivities[id]) {
              const { [id]: _, ...rest } = state.selectedActivities;
              state.selectedActivities = rest;
            } else {
              state.selectedActivities = { 
                ...state.selectedActivities, 
                [id]: {id, name} 
              };
            }
          },
        stepUp(state, action){
            if(state.step < 4 ){
                state.step += action.payload;
            }
        },
        stepDown(state, action) {
            if(state.step > 0) {
                const currentStep = state.step;
                state.step -= action.payload;
                
                switch(currentStep) {
                    case 1: 
                        state.selectedActivities = {};
                        break;
                    case 2:
                        state.travelDetails = {};
                        break;
                    case 3: 
                        break;
                    default:
                        break;
                }
            }
        },
        setTravelDetails(state, action){
            state.travelDetails = action.payload;
        },

        resetCustomTour(state) {
            return initialState;
        },


    }

})

export const { setSelectedRegion, toggleActivity, stepUp, stepDown, setTravelDetails, resetCustomTour} = CustomSlice.actions;
export default CustomSlice.reducer;