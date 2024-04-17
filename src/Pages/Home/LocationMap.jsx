import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const LocationMap = () => {
  return (
    <MapContainer
      center={[23.8103, 90.4125]} // Dhaka's latitude and longitude
      zoom={12}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[23.8103, 90.4125]}>
        <Popup>
          Dhaka City<br />The capital city of Bangladesh
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default LocationMap;
