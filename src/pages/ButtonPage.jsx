import Button from "../components/Button";
import {
  GoBell,
  GoCloudDownload,
  GoDatabase,
  GoOctoface,
  GoZap,
} from "react-icons/go";
function ButtonPage() {
  const handleClick = () => {
    console.log("Button Clicked!");
  };

  return (
    <div>
      <h1 className="bg-rose-600 text-center">Button Page</h1>
      <div>
        <Button success rounded outline onClick={handleClick} className="mb-5">
          <GoBell />
          Click Me!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloudDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          See deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          <GoOctoface />
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded className="m-7">
          <GoZap />
          Somthing!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
