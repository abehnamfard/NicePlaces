import React, { useState } from "react";
import { Map, TileLayer, Marker } from "react-leaflet";
import { Button, Modal } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  FundViewOutlined
} from "@ant-design/icons";
import "antd/dist/antd.css";

import Card from "../../shared/components/UIElements/Card";
import "./PlaceItem.css";
import { Link } from "react-router-dom";

const PlaceItem = props => {
  const [mapModalStatus, setMapModalStatus] = useState(false);

  return (
    <li className="place-item">
      <Card className="place-item__content">
        <div className="place-item__image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="place-item__info">
          <h2>{props.title}</h2>
          <h3>{props.address}</h3>
          <p>{props.description}</p>
        </div>
        <div className="place-item__actions">
          <Button
            shape="round"
            type="primary"
            icon={<FundViewOutlined />}
            onClick={() => setMapModalStatus(!mapModalStatus)}
          >
            مشاهده روی نقشه
          </Button>
          <Link to={`/places/${props.id}`}>
            <Button shape="round" type="default" icon={<EditOutlined />}>
              ویرایش
            </Button>
          </Link>
          <Link to="">
            <Button shape="round" icon={<DeleteOutlined />} danger>
              حذف
            </Button>
          </Link>
        </div>
      </Card>
      <Modal
        key={props.id}
        title={`مشاهده ${props.title}`}
        centered
        visible={mapModalStatus}
        onCancel={() => setMapModalStatus(false)}
        footer={<Button onClick={() => setMapModalStatus(false)}>بستن</Button>}
      >
        <Map
          center={props.coordinates}
          zoom="16"
          style={{ height: 500, width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={props.coordinates} />
        </Map>
      </Modal>
    </li>
  );
};

export default PlaceItem;
