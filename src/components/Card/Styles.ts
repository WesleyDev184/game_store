import styled from 'styled-components'

interface CardProps {
    ImageUrl: string
}

export const CardBody = styled.div<CardProps>`
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    cursor: pointer;
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    background: ${props => props.theme.background.secondary};
    transition: all 0.5s;

    &:hover {
        background: linear-gradient(
            ${props => props.theme.colors.primaryLight},
            ${props => props.theme.colors.primary}
        );
    }

    .star {
        position: absolute;
        top: 0.5em;
        right: 0.8em;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 0.3em 0.5em;
        border-radius: 0.5em;
        z-index: 3;
        color: ${props => props.theme.colors.text.reverse};

        section {
            display: flex;
            gap: 0.3em;

            span {
                display: flex;
                align-items: center;
            }
        }
    }

    .img {
        width: 360px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 200px;
        background-image: url(${props => props.ImageUrl});
        background-size: cover;
        background-position: center;
        transition: all 0.5s;
        z-index: 2;
        position: relative;
        opacity: 0.8;
    }

    &:hover .img {
        width: 430px;
        opacity: 1;
    }

    .content {
        height: 0;
        opacity: 0;
        transition: all 0.5s;
        position: absolute;
        box-sizing: border-box;
        overflow: hidden;
        z-index: 3;
        background-color: rgba(0, 0, 0, 0.8);
        width: 100%;
        color: ${props => props.theme.colors.text.reverse};

        section {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 100%;

            .infoContainer {
                font-weight: 100;
                opacity: 0.8;
                margin-top: 8px;
                flex-direction: column;
                width: 90%;

                .title {
                    font-size: 20px;
                    font-weight: 500;
                    width: 100%;
                    text-align: center;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    margin-bottom: 0.5em;
                }

                .platforms {
                    display: flex;
                    flex-direction: row;
                    gap: 0.4em;
                    width: 100%;
                    font-size: 17px;
                    margin: 0.3em 0;
                    justify-content: start;
                }

                .info {
                    font-size: 16px;

                    div {
                        display: flex;
                        flex-direction: row;
                        gap: 0.4em;
                        width: 100%;
                        justify-content: space-between;
                    }
                }
            }
        }
    }

    &:hover .content {
        height: 150px;
        padding: 20px;
        opacity: 1;
    }

    .arrow {
        padding: 10px;
        transform: rotate(-180deg);
        transition: all 0.5s;
        color: ${props => props.theme.colors.text.primary};
    }

    &:hover .arrow {
        transform: rotate(0);
        color: ${props => props.theme.colors.text.reverse};
    }

    .arrow span {
        font-size: 20px;
    }
`
