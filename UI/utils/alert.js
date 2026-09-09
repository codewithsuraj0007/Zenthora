import Swal from "sweetalert2";

const showPop=(type,message)=>{
   return Swal.fire({
    position: "center",
    icon: type,
    title: message,
    showConfirmButton: type === "error",
    timer: type === "success" ? 1500 : undefined
})
}
export default showPop;