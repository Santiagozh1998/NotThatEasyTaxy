//Dependencias
import React, { Component } from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine';
import Popup from 'reactjs-popup';


//Componentes
import '../styles.css';


//Variables globales
var myIcon = L.icon({
    iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII',
    iconSize: [25,41],
});

var iconRoute = L.icon({
    iconUrl: 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8Zz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNBNEMyRjc7IiBkPSJNMjU2LjAxNyw1MDIuNTE5TDExOC4xNDQsMzAzLjQwN2MtNTEuNDU5LTY4LjYxMy00NC42MzYtMTgyLjgwMywxNi4wMDktMjQzLjQ0OGwwLDAgICBjNjcuMzAzLTY3LjMwMywxNzYuNDI0LTY3LjMwMywyNDMuNzI3LDBsMCwwYzYwLjY0Niw2MC42NDUsNjcuNDY5LDE3NC44MzYsMTYuMDEsMjQzLjQ0OEwyNTYuMDE3LDUwMi41MTl6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRTNFN0YyOyIgZD0iTTM0OS40MzcsNTkuOTU4TDM0OS40MzcsNTkuOTU4Yy0zNC43LTM0LjY1Ni04Mi41NzktNTIuNzk2LTEzMS41MzItNDkuODM1ICAgYy0wLjUyNSwxLjk0My0xLjcsMy42NDgtMy4zMjgsNC44MzJjLTEwLjYyMiw4LjE4Ni0yMy4yNjYsMTMuMzM1LTM2LjU4NSwxNC44OThjLTUuODg4LDEuMDY5LTExLjYzNSwyLjgwNy0xNy4xMjksNS4xODEgICBjLTIuOTQsMTIuNDQxLTkuNjcxLDIzLjY2Mi0xOS4yNjMsMzIuMTE0Yy0xNS40MTcsMTQuNTE2LTMwLjA0NiwyOS44NDctNDMuODIzLDQ1LjkyN2MtMS4zOTIsMy4zMjItMi42MDIsNi43MTgtMy42MjQsMTAuMTcxICAgYy0zLjQwNiwxNC4zNzEtNi4wNTYsMjguOTEtNy45MzksNDMuNTU4YzEuMTczLDEzLjAyNywxLjUzNCwyNi4wMDEsMS42NjksMzkuMTRjLTAuODQ5LDExLjIxMS0wLjgwNCwyMi40NzIsMC4xMzUsMzMuNjc2ICAgbDAuMDEyLDAuMDIzYzAuNTAxLDEuMzczLDAuODYyLDIuNjI2LDEuMjk2LDMuOTM4YzIxLjEyOSw0Ni40MzMsNDUuNjc5LDkxLjIzMiw3My40NDYsMTM0LjAyOCAgIGMyMi43NTMsMzIuODI2LDYxLjk5NSw2OS4wODEsNzYuNzEzLDEwNy43MDhsMTI1Ljk2Mi0xODEuOTFDNDE2LjkwNSwyMzQuNzk0LDQxMC4wODIsMTIwLjYwNCwzNDkuNDM3LDU5Ljk1OHoiLz4KCTxjaXJjbGUgc3R5bGU9ImZpbGw6IzdGQUNGQTsiIGN4PSIyNTcuNjk0IiBjeT0iMTgwLjE0OCIgcj0iNTYuODg5Ii8+Cgk8ZWxsaXBzZSBzdHlsZT0iZmlsbDojQTRDMkY3OyIgY3g9IjI0My40NzEiIGN5PSIxODAuMTQ4IiByeD0iNDIuNjY3IiByeT0iNTYuODg5Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTEzNy43ODEsNTkuOTU4TDEzNy43ODEsNTkuOTU4YzM2LjQ5Mi0zNi41NTUsODcuNDgyLTU0Ljc3MiwxMzguODc1LTQ5LjYxNyAgIGMtNDEuNjM3LDIuNDg3LTgwLjkyMSwyMC4xMzctMTEwLjQzLDQ5LjYxN2gtMC4wMDFjLTYwLjY0NSw2MC42NDYtNjcuNDY5LDE3NC44MzYtMTYuMDA5LDI0My40NDlsMTIzLjY1MSwxNzguNTcybC0xNC4yMjIsMjAuNTM5ICAgTDEyMS43NzIsMzAzLjQwN0M3MC4zMTMsMjM0Ljc5NCw3Ny4xMzYsMTIwLjYwNCwxMzcuNzgxLDU5Ljk1OHoiLz4KCTxnPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiM0MjhERkY7IiBkPSJNMjU3LjY5NCwyNDYuNTE5Yy0zNi42NTUsMC02Ni4zNy0yOS43MTUtNjYuMzctNjYuMzdzMjkuNzE1LTY2LjM3LDY2LjM3LTY2LjM3ICAgIHM2Ni4zNywyOS43MTUsNjYuMzcsNjYuMzdDMzI0LjAyLDIxNi43ODUsMjk0LjMzMSwyNDYuNDc0LDI1Ny42OTQsMjQ2LjUxOXogTTI1Ny42OTQsMTMyLjc0MSAgICBjLTI2LjE4MiwwLTQ3LjQwNywyMS4yMjUtNDcuNDA3LDQ3LjQwN3MyMS4yMjUsNDcuNDA3LDQ3LjQwNyw0Ny40MDdzNDcuNDA3LTIxLjIyNSw0Ny40MDctNDcuNDA3ICAgIEMzMDUuMDcsMTUzLjk3OSwyODMuODYzLDEzMi43NzEsMjU3LjY5NCwxMzIuNzQxTDI1Ny42OTQsMTMyLjc0MXoiLz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojNDI4REZGOyIgZD0iTTI1Ni4wMTgsNTEyYy0zLjExMSwwLTYuMDI1LTEuNTI2LTcuNzk2LTQuMDgzbC0xMzcuODctMTk5LjExMSAgICBjLTU0LjM1Mi03Mi40NDQtNDYuNDU0LTE5MiwxNy4xMDItMjU1LjU0NkMxNjEuNTQ5LDE5LjE1OCwyMDcuNzk2LDAsMjU2LjAxOCwwczk0LjQ2OSwxOS4xNTgsMTI4LjU2NSw1My4yNTkgICAgYzYzLjU1Niw2My41NDYsNzEuNDU0LDE4My4xMDIsMTYuODg5LDI1NS44MzNMMjYzLjgxNCw1MDcuOTE3QzI2Mi4wNDIsNTEwLjQ3NCwyNTkuMTI5LDUxMiwyNTYuMDE4LDUxMnogTTI1Ni4wMTgsMTguOTYzICAgIGMtNDMuMjE2LTAuMTE2LTg0LjY4MywxNy4wNjEtMTE1LjE1Nyw0Ny43MDRjLTU3LjM2MSw1Ny4zNTItNjQuNDI2LDE2NS4zMjQtMTUuMTMsMjMxLjA1NmwxMzAuMjg3LDE4OC4xMzlsMTMwLjA3NC0xODcuODUyICAgIGM0OS41MDktNjYuMDE5LDQyLjQ0NC0xNzMuOTkxLTE0LjkxNy0yMzEuMzQzQzM0MC43MDEsMzYuMDI0LDI5OS4yMzQsMTguODQ3LDI1Ni4wMTgsMTguOTYzeiIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=',
    iconSize: [90,45],   
});


var map;

class MapsD extends Component{

    constructor(props){
        super(props);

        this.asyncCall = this.asyncCall.bind(this);

        this.state = {
            User:{
                Cellphone: this.props.Cellphone
            },
            location: {
                lat: 0,
                lng: 0                
            },
            zoom: 2
        }
    }

    //Metodo que se ejecuta despues de que todo este en el DOM
    componentDidMount () {       

        this.asyncCall();

        if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition((Position) => {

            this.setState({
            location: {
                lat: Position.coords.latitude,
                lng: Position.coords.longitude
            },
            zoom: 16
            })
            this.initMap()
        });
        }
        
    }

    async asyncCall() {

        await setInterval(() => {
             console.log('resolved');
         }, 5000);
         
     }

    //Crea el mapa
    initMap() {

        map = L.map('map', {
        center: [this.state.location.lat, this.state.location.lng],
        zoom: this.state.zoom
        });

        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}{r}.png', {
        attribution: '© OpenStreetMap contributors'
        }).addTo(map);
        
        //Posicion actual
        L.marker([this.state.location.lat, this.state.location.lng], {icon: myIcon}).addTo(map)
        .on("contextmenu", (e) => {
        })
        .bindPopup("Tu posicion actual").openPopup();
            
    }

    render() {

        return(<div id="map" className="map"></div>);
    }


}

export default MapsD;