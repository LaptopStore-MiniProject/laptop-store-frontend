export default function Footer()
{
    return(
        <footer className="border-t bg-white">
            <div className="max-w-7xl mx-auto px-6 py-6 text-center text-gray-500">
                LaptopStore © {new Date().getFullYear()} {/* Lấy năm động luôn cho xịn */}
            </div>
        </footer>
    )
}