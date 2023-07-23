import "./cell-item.css";

interface cellItem {
  id: number;
  title: string;
  description: string;
}

function CellItem({ id, title, description }: cellItem) {
  return (
    <div className={"cell_item_block"}>
      <div className={"id_block"}>{id}</div>
      <div className={"title_block"}>{title}</div>
      <div className={"description_block"}>{description}</div>
    </div>
  );
}

export default CellItem;
