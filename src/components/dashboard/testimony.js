function Testimony() {
  return (
    <div>
      <div className="container mx-auto px-5">
        <div className="text-center pt-12">
          <i className="bi bi-quote text-5xl"></i>
        </div>
        <div className="tmslider block">
          <div className="flex items-center justify-center py-5">
            <img
              src="asset/images/testimony/person.jpg"
              className="w-32 rounded-full"
              alt="Testimony"
            />
          </div>
          <div className="text-center">
            <strong className="text-lg">Name</strong>
            <p className="text-sm font-semibold text-gray-700">Status</p>
            <p className="text-base font-semibold pt-4">"Comment"</p>
          </div>
        </div>
        <div className="tmslider hidden">
          <div className="flex items-center justify-center py-5">
            <img
              src="asset/images/testimony/person.jpg"
              className="w-32 rounded-full"
              alt="Testimony"
            />
          </div>
          <div className="text-center">
            <strong className="text-lg">Name</strong>
            <p className="text-sm font-semibold text-gray-700">Status</p>
            <p className="text-base font-semibold pt-4">"Comment"</p>
          </div>
        </div>
        <div className="tmslider hidden">
          <div className="flex items-center justify-center py-5">
            <img
              src="asset/images/testimony/person.jpg"
              className="w-32 rounded-full"
              alt="Testimony"
            />
          </div>
          <div className="text-center">
            <strong className="text-lg">Name</strong>
            <p className="text-sm font-semibold text-gray-700">Status</p>
            <p className="text-base font-semibold pt-4">"Comment"</p>
          </div>
        </div>
        <div className="tmslider hidden">
          <div className="flex items-center justify-center py-5">
            <img
              src="asset/images/testimony/person.jpg"
              className="w-32 rounded-full"
              alt="Testimony"
            />
          </div>
          <div className="text-center">
            <strong className="text-lg">Name</strong>
            <p className="text-sm font-semibold text-gray-700">Status</p>
            <p className="text-base font-semibold pt-4">"Comment"</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <i
            className="bi bi-dot text-red-600/50 active text-6xl mt-5 mb-10"
            style={{ marginRight: "-30px" }}
          ></i>
          <i
            className="bi bi-dot text-red-600/50 text-6xl mt-5 mb-10"
            style={{ marginRight: "-15px" }}
          ></i>
          <i
            className="bi bi-dot text-red-600/50 text-6xl mt-5 mb-10"
            style={{ marginLeft: "-15px" }}
          ></i>
          <i
            className="bi bi-dot text-red-600/50 text-6xl mt-5 mb-10"
            style={{ marginLeft: "-30px" }}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default Testimony;
