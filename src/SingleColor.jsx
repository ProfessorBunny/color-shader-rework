import { toast } from "react-toastify";

const SingleColor = (props) => {
  console.log(props.color);
  const { hex, weight, type } = props.color;
  const clickHandler = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("Successfully copied to clipboard");
      } catch (error) {
        toast.error("Failed to copy");
      }
    } else {
      toast.error("Can't access clipboard");
    }
  };
  return (
    <article
      className={props.index > 10 ? "color color-light" : "color"}
      style={{ background: `#${hex}` }}
      onClick={clickHandler}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
      <p className="color-value">{type}</p>
    </article>
  );
};
export default SingleColor;
