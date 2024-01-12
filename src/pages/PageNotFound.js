
import { Button } from "../components";
import { Link } from "react-router-dom";
import NotFoundImage from "../assets/images/pagenotfound.png";
export const PageNotFound = () => {
 
  
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <h1 className="text-7xl my-4 dark:text-red-700 text-red-600 font-bold">
            404, Oops!
          </h1>
          <div className="max-w-lg">
            <img src={NotFoundImage} alt="notfound" className="my-3 rounded" />
            <div className="my-10">
              <Link to="/">
                <Button text="Back to Filymate" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
