import BottomNav from "../../../components/BottomNav";

export default function LibraryPage() {
  return (
    <div className="min-h-screen pb-20 bg-gray-50 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-[#ff7f50] mb-4">Library</h1>
      <p className="text-gray-700 text-center max-w-md">
        This is your Personal Library. Upload notes, guides, and solutions.
      </p>

      <BottomNav />
    </div>
  );
}
