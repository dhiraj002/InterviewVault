import { X, Trash2 } from "lucide-react";

interface ConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    confirmButtonClass?: string;
}

export default function ConfirmationModal({ isOpen, onClose, onConfirm, title, message, confirmText = "Confirm", cancelText = "Cancel", confirmButtonClass = "bg-blue-600 hover:bg-blue-700" }: ConfirmationModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            {/* Backdrop */}
            <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose} />

            {/* Modal */}
            <div className="flex min-h-full items-center justify-center p-4">
                <div className="relative bg-gray-800 rounded-xl shadow-2xl border border-gray-700 w-full max-w-md transform transition-all">
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-700">
                        <div className="flex items-center space-x-3">
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                                    <Trash2 className="w-5 h-5 text-red-400" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white">{title}</h3>
                                <p className="text-sm text-gray-400">This action cannot be undone</p>
                            </div>
                        </div>
                        <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        <p className="text-gray-300 leading-relaxed text-sm">{message}</p>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-end space-x-3 p-6 border-t border-gray-700 bg-gray-750">
                        <button onClick={onClose} className="px-6 py-2 text-gray-300 hover:text-white hover:bg-gray-600 rounded-lg transition-colors font-medium border border-gray-600">
                            {cancelText}
                        </button>
                        <button onClick={onConfirm} className={`px-4 py-2 text-white rounded-lg transition-colors font-medium ${confirmButtonClass}`}>
                            {confirmText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
