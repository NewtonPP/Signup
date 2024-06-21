import { IoArrowBack } from "react-icons/io5";
import ReactSignatureCanvas from "react-signature-canvas";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
const SignaturePage = () => {
  const Navigate = useNavigate();
  const sigCanvas = useRef(null);
  const [imageURL, setImageURL] = useState();
  const [penColor, setPenColor] = useState("black");
  const [backgroundColor, setBackgroundColor] = useState("white");
  let color = "";
  let tempBackgroundColor = "";

  const SaveSignature = () => {
    if (sigCanvas.current) {
      const signature = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
      console.log(signature);
      setImageURL(signature);

      const link = document.createElement("a");
      link.href = signature;
      link.download = "signature.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const ClearSignature = () => {
    sigCanvas.current.clear();
  };

  const HandleBackgroundColorClick = () => {
    setBackgroundColor(tempBackgroundColor);
  };

  const ShowChanges=()=>{
    sigCanvas.current.clear();
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      
        <div className="shadow-lg rounded-lg bg-white p-8">
        <button className="h-[50px] w-[50px] bg-gray-500 flex justify-center items-center rounded-[40px] hover:bg-gray-700"
        onClick={()=>Navigate("/")}>
        <IoArrowBack className="text-white h-[40px] w-[40px]"/>
        </button>
          <div className="header flex flex-col items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Signature Pad</h1>
            
            <div className="flex space-x-4 mb-4">
              <div className="pen-color flex items-center bg-blue-100 p-2 rounded-md">
                <input
                  className="h-8 w-32 px-2 rounded-md text-gray-700 border border-blue-300 focus:outline-none focus:border-blue-500"
                  placeholder="Pen Color"
                  onChange={(e) => {
                    color = e.target.value;
                  }}
                />
                <button
                  className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  onClick={() => setPenColor(color)}
                >
                  Set
                </button>
              </div>

              <div className="background-color flex items-center bg-yellow-100 p-2 rounded-md">
                <input
                  className="h-8 w-32 px-2 rounded-md text-gray-700 border border-yellow-300 focus:outline-none focus:border-yellow-500"
                  placeholder="Background Color"
                  onChange={(e) => {
                    tempBackgroundColor = e.target.value;
                  }}
                />
                <button
                  className="ml-2 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                  onClick={HandleBackgroundColorClick}
                >
                  Set
                </button>

                <button
                  className="ml-2 px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600"
                  onClick={ShowChanges}
                >
                  Show Change
                </button>
              </div>
            </div>
          </div>

          <ReactSignatureCanvas
            ref={sigCanvas}
            penColor={penColor}
            backgroundColor={backgroundColor}
            canvasProps={{ width: "700px", height: "360px", className: "signature-canvas border border-gray-300" }}
          />

          <div className="footer flex justify-around mt-6">
            <button
              className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              onClick={SaveSignature}
            >
              Save
            </button>
            <button
              className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              onClick={ClearSignature}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignaturePage;
