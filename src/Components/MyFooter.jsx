const MyFooter = function () {
  return (
    <>
      <footer className="bg-warning text-center">
        <p>
          © - Epicode <span>{new Date().getFullYear()}</span>
        </p>
      </footer>
    </>
  );
};

export default MyFooter;
