import { AbstractControl } from "@angular/forms";

export function validate(control:AbstractControl){
    const password=control.get('Password');
    const confirmPass=control.get('confirmPassword');
    if(password?.pristine || confirmPass?.pristine){//pristine mean not change opposite to dirty
        return null;
    }
    return password && confirmPass && password.value!=confirmPass.value 
    ?{'misMatch':true}
    :null
}