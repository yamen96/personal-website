import styled from 'styled-components'

export const Section = styled.div`
    max-width 25rem;
    height: calc(100vh - 55px);
    width: 100%;
    margin: 55px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.mainText};

    @media (max-height: 600px) {
        margin-top: 55px;
        height: calc(100% + 75px);
    }

    @media (max-width: 600px) {
        margin-top: 55px;
        height: calc(100% + 75px);
    }

    .MyImg {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
        span {
            position: relative;
        }
        img {
            transition: opacity 300ms ease-in-out;
        }
        span img:first-child {
            opacity: 1;
        }
        span img:last-child {
            position: absolute;
            left: 0px;
            opacity: 0;
        }
        span:hover img:first-child {
            opacity: 0;
        }
        span:hover img:last-child {
            opacity: 1;
        }
    }

    .Intro {
        margin: 10px;
        font-size: 20px;
    }

    .Header {
        width: clamp(320px, 40vw, 470px);
        margin: 0 10px;
        font-size: 60px;
        font-size: clamp(50px, 6vw, 70px);
        padding: 2px 8px 2px 8px;
        border: 4.5px solid ${({ theme }) => theme.mainText};
        display: flex;
        justify-content: center;
    }
    
    .AboutMeBlurb {
        padding: 40px 10px;
        font-size: 20px;
        b {
            font-size: 20px;
            font-weight: 500;
        }
    }

    .Buttons {
        width: 100%;
        display: flex;
        justify-content: center;
        @media (max-width: 500px) {
            flex-direction: column;
        }
    }
`;