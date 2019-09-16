export const FETCH_DATA = "FETCH_DATA";
export const FETCH_SETTINGS_DATA = "FETCH_SETTINGS_DATA";
export const PREV_SLIDE = "PREV_SLIDE";
export const NEXT_SLIDE = "NEXT_SLIDE";
export const SET_ACTIVE_SLIDE_INDEX = "SET_ACTIVE_SLIDE_INDEX";

const fetchData = data => dispatch => {
  fetch(`/${data}.json`)
    .then(response => response.json())
    .then(slides => {
      dispatch({
        type: FETCH_DATA,
        slides,        
        slidesLength: slides.length - 1
      });
    })
};

const fetchSettingsData = data => dispatch => {
  fetch(`/settingsMenu/settings${data}.json`)
    .then(response => response.json())
    .then(slides => {
      dispatch({
        type: FETCH_DATA,
        slides,        
        slidesLength: slides.length - 1
      });
    })
};

const setActiveSlideIndex = (index) => {
  return{
    type: SET_ACTIVE_SLIDE_INDEX,
    index
  }
}
const nextSlide = (activeSlide, passedKey) => dispatch => {
  document.addEventListener("keydown", event => {
    if (event.isComposing || event.key === passedKey) {
      dispatch({
        type: NEXT_SLIDE,
        activeSlide
      });
    }  
  });
};

const prevSlide = (activeSlide, passedKey) => dispatch => {
  document.addEventListener("keydown", event => {
    if (event.isComposing || event.key === passedKey) {
      dispatch({
        type: PREV_SLIDE,
        activeSlide
      });
    }
  });
};

export default {
  fetchData,
  nextSlide,
  prevSlide,
  fetchSettingsData,
  setActiveSlideIndex
};
