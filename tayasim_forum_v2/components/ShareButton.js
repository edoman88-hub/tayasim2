export default function ShareButton({ url, text }) {
  const handleShare = () => {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`;
    window.open(
      shareUrl,
      "fbShareWindow",
      "height=600,width=800,top=100,left=100,resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,directories=no,status=yes"
    );
  };

  return (
    <button
      onClick={handleShare}
      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
    >
      שתף לפייסבוק
    </button>
  );
}
