import Swal from "sweetalert2";

class Toast {
    static success(message: string) {
        Swal.fire({
            text: message,
            icon: "success",
        });
    }

    static error(message: string) {
        Swal.fire({
            text: message,
            icon: "error",
        });
    }
}

export default Toast;