import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import imagem404 from "@/assets/images/404/out.png";

const BACKGROUND_IMAGE_URL = imagem404;

const maskStyle = BACKGROUND_IMAGE_URL
  ? {
      WebkitMaskImage: `url("${BACKGROUND_IMAGE_URL}")`,
      maskImage: `url("${BACKGROUND_IMAGE_URL}")`,
      WebkitMaskSize: "cover",
      maskSize: "cover",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
    }
  : undefined;

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 py-12">
      <div className="flex w-full max-w-5xl flex-col-reverse items-center md:flex-row md:justify-center">
        <div className="relative z-10 -mt-12 shrink-0 text-center md:mt-0">
          <h1 className="text-[8rem] font-bold leading-none text-secondary sm:text-[10rem] md:text-[14rem]">
            404
          </h1>
          <p className="mt-2 text-4xl font-bold text-secondary md:text-5xl">Out!</p>
          <Link
            to="/portfolio"
            className="mt-8 inline-flex items-center rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Voltar para o início
          </Link>
        </div>

        <div
          aria-hidden="true"
          className="relative h-64 w-full bg-background md:-ml-40 md:h-[28rem] md:w-[60%]"
        >
          <div
            className={`h-full w-full ${BACKGROUND_IMAGE_URL ? "bg-secondary" : "bg-secondary/10"}`}
            style={maskStyle}
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background via-background/70 to-transparent 
            md:inset-y-0 md:right-auto md:left-0 md:h-auto md:w-3/4 md:bg-gradient-to-r" />
        </div>
      </div>
    </main>
  );
};

export default NotFound;