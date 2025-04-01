const MyFooter = function () {
  return (
    <>
      <footer className="bg-warning text-center p-3">
        <p>
          © - Epicode <span>{new Date().getFullYear()}</span>
        </p>
      </footer>
    </>
  );
};

export default MyFooter;
