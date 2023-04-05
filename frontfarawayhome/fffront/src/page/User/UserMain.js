import { React } from "react";
import { useNavigate } from "react-router-dom";
import { DivSC } from "./UserMainSC";

const UserMain = () => {
    const navigate = useNavigate();

    return(
        <DivSC>
            <button onClick = {() => {navigate('/UserInfoForm')}}>유저 정보</button>
            <button onClick = {() => {navigate("/UserChangeForm")}}>유저 정보 수정</button>
            <button onClick = {() => {navigate("/UserWithdrawForm")}}>유저 탈퇴</button>
        </DivSC>
    )
};

export default UserMain;