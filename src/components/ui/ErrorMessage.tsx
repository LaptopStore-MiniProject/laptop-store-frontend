interface ErrorMessageProps{
    message?: string;
}

export default function ErrorMessage({message = "Có lỗi xảy ra!"}: ErrorMessageProps) 
{
    return (
    <div className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50" role="alert">
                {/* Icon cảnh báo */}
                <svg className="flex-shrink-0 inline w-5 h-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z"/>
                </svg>
                <div>
                    <span className="font-medium">Lỗi: </span> {message}
                </div>
            </div>
    )
}