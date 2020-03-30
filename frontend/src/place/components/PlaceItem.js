import { withRouter } from "react-router-dom";
import React from "react";
import { Button } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  FundViewOutlined
} from "@ant-design/icons";
import "antd/dist/antd.css";

import Card from "../../shared/components/UIElements/Card";
import "./PlaceItem.css";

const PlaceItem = props => {
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
          <Button shape="round" type="primary" icon={<FundViewOutlined />}>
            مشاهده روی نقشه
          </Button>
          <Button
            shape="round"
            type="default"
            onClick={() => props.history.push(`/places/${props.id}`)}
            icon={<EditOutlined />}
          >
            ویرایش
          </Button>
          <Button shape="round" icon={<DeleteOutlined />} danger>
            حذف
          </Button>
        </div>
      </Card>
    </li>
  );
};

export default withRouter(PlaceItem);
