import { FETCH_DATA } from "../Actions/dataActions";
import { FETCH_SETTINGS_DATA } from "../Actions/dataActions";
import { NEXT_SLIDE } from "../Actions/dataActions";
import { PREV_SLIDE } from "../Actions/dataActions";

const initialState = {
    slides: [],
    slidesLength: 0,
    activeSlideIndex: 0
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA: {
      return {
        ...state,
        slides: action.slides,
        slidesLength: action.slidesLength,
        activeSlideIndex: 1
      };
    }
    case FETCH_SETTINGS_DATA: {
      return {
        ...state,
        slides: action.slides,
        slidesLength: action.slidesLength,
        activeSlideIndex: action.slidesLength
      };
    }

    case NEXT_SLIDE: {
        return {
          ...state,
          activeSlideIndex: action.activeSlide+1
        };
      }

    case PREV_SLIDE: {
      return {
        ...state,
        activeSlideIndex: action.activeSlide-1
      };
    }
    default: {
      return state;
    }
  }
}