import axios from 'axios';
import config from '../config';

export const listVenues = (params) => dispatch => {
  dispatch({
    type: 'LIST_VENUES',
    venues: params.section === 'food' ? {
      groups: [
        {
          type: 'Recomended places',
          items: [
            {
              venue: {
                id: 3213213,
                location: {
                  address: 'Direccion',
                  lat: 40.7243,
                  lng: -74.0018,
                },
                name: 'Test 1',
              }
            }
          ]
        }
      ]
    } : {
      groups: [
        {
          type: 'Recomended places for food',
          items: [
            {
              venue: {
                id: 3213213332432,
                location: {
                  address: 'Direccionadsa',
                  lat: 40.7243,
                  lng: -74.0018,
                },
                name: 'Test 2',
              }
            }
          ]
        }
      ]
    }
  })
};

  // axios.get(config.urls.venues, {
  //   params: {
  //     ...config.params,
  //     ...params,
  //     ll: '40.7243,-74.0018',
  //   }
  // })
  //   .then(
  //     (res) => {
  //       dispatch({
  //         type: 'LIST_VENUES',
  //         data: res.data.response,
  //       });
  //     },
  //     (error) => {
  //       // this.setState({
  //       //   isLoaded: true,
  //       //   error,
  //       // });
  //     }
  //   )