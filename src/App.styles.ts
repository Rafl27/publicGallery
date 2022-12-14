import styled from 'styled-components'

export const Container = styled.div`
background-color: #27282F;
color:#FFF;
min-height: 100vh;
`

export const Area = styled.div`
margin:auto;
max-width:980px;
padding:30px 0;
`

export const Header = styled.h1`
margin:0;
padding:0;
text-align:center;
margin:bottom:30px;
`

export const ScreenWarning = styled.div`
    text-align: center;
    margin-top: 20px;
    .emoji{
        font-size: 50px;
        margin-bottom: 20px;
    }
`

export const PhotoList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    // grid-template-columns: repeat(4, 1fr);
    gap: 10px;
`

export const UploadForm = styled.form`
    background-color: #3D3F43;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;

    input[type=submit] {
        background-color:#324ea8;
        border:0;
        color: white;
        padding: 8px 16px;
        border-radius: 10px;
        margin: 0 20px;
        cursor: pointer;
        

        &:hover {
            opacity: .8;
        }

        //with styled components I can use effects inside the element itself, and & means the element 
    }


`