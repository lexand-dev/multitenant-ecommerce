type FooterProps = { brand?: string };

export const Footer = ({ brand = "funroad, Inc." }: FooterProps) => {
  return (
    <footer className="flex border-t justify-between font-medium p-6">
      <div className="flex items-center gap-2">
        <p>
          © {new Date().getFullYear()} {brand}
        </p>
      </div>
    </footer>
  );
};
