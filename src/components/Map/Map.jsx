import { useEffect } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import axios from 'axios';
import { Component } from 'react';

const inst = axios.create({
    baseURL: 'https://shielded-everglades-88732.herokuapp.com/api'
});


const useScript = url => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [url]);
};

class MyMap extends Component {
    constructor(props) {
        super(props);
        this.state = {node_info: []};
    }

    componentDidMount() {
        inst.get('/node_list/').then(res => {
            this.setState({
                node_info: res.data
            })
        })
    }

    render() {
        console.log(this.state);
    
        return (
            <YMaps>
                <div id='map-wrapper'>
                    <Map 
                        height="100%" 
                        width="100%" 
                        defaultState={{ center: [55.75, 37.57], zoom: 9 }}
                    >
                        
                        {
                        this.state.node_info.map((el) => <Placemark geometry={[el.lon, el.lat]} />)
                        }
                    </Map>
    
                </div>
            </YMaps>
        );
    }
}

// const MyMap = (props) => {
//     const get_all_nodes = () => {
//         console.log("entered a query");
//         return inst.get('/node_list/').then(res => res.data);
//     };
//     // let StationsData = await get_all_nodes();
//     // console.log(StationsData);

//     // console.log(typeof StationsData)
//     let nodes_info = [];
//     get_all_nodes().then(nodes => {nodes_info = nodes;});

//     let check_nodes_to_update = () => {
//         if (nodes_info.size) {
//             // document.find
//         } else {
//             setTimeout(check_nodes_to_update, 1000);
//         }
//     };

//     return (
//         <YMaps>
//             <div id='map-wrapper'>
//                 <Map 
//                     height="100%" 
//                     width="100%" 
//                     defaultState={{ center: [55.75, 37.57], zoom: 9 }}
//                 >
//                     <Placemark geometry={[55.75, 37.57]}/>
//                     <div id="all_placemarks"> 

//                     </div>
           
//                 </Map>

//             </div>
//         </YMaps>
//     );
// }

export default MyMap;