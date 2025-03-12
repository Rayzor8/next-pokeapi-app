type BoxWhiteProps = {
  children: React.ReactNode;
};

export default function BoxWhite({ children } : BoxWhiteProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 animate-fade-in">
      {children}
    </div>
  );
}
