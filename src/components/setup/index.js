import React, { useState } from 'react';
import styled from "styled-components";
import Images from "./choiceImages";

const SetupPages = [
    {
        title: "Name & Gender",
        component: 'setName',
        selections: [{
            name: 'Male',
            img: Images.gender.male,
            details: 'a Male'
        }, {
            name: 'Female',
            img: Images.gender.female,
            details: 'a Male'
        },
        {
            name: 'Futanari',
            img: Images.gender.futanari,
            details: 'a Male'
        },
        ]
    }, {
        title: "Body Type"
    }
];

// move between pages, trigegr events display choices, finish
const Setup = () => {
    const [page, setPage] = useState(0);
    const changePageNext = () => {
        if (page <= SetupPages.length) {
            setPage(page + 1);
        }
    }
    const changePageBack = () => {
        if (page >= 1) {
            setPage(page - 1);
        }
    }
    return (
        <Wrapper>
            Setup
            <Selections {...SetupPages[page]} />
            <BtnWrapper>
                <PageBtn>{'<'}</PageBtn>
                <PageBtn>{'>'}</PageBtn>
            </BtnWrapper>
        </Wrapper>
    )
}

const Selections = ({ title, component, selections }) => {

    return (
        <SelectionBox>
            <Title>{title}</Title>
            {component}
            <SelectionsWrapper>
                {selections.map(selection => (
                    <SelectBox>
                        <SelectionImg alt='img' src={selection.img} />
                        <h5>{selection.name}</h5>
                        <span>{selection.details}</span>
                    </SelectBox>)
                )}
            </SelectionsWrapper>
        </SelectionBox>
    )
}

const Wrapper = styled.div`
    height: 100%;
    background: darkgreen;
    margin: 32px;
`
const SelectionBox = styled.div`
    height: 600px;
    color: white;
`
const Title = styled.h3`
text-decoration: underline;
`
const SelectionsWrapper = styled.div`
    min-height: 600px;
    display: flex;
    flex-wrap: wrap;
`
const SelectBox = styled.div`
    min-height: 400px;
`
const SelectionImg = styled.img`
    height: 320px;
`
const BtnWrapper = styled.div`
          width: 100%;
          margin: 32px;
          display: flex;
          justify-content: space-between;
        `
const PageBtn = styled.button`
          border: 2px solid grey;
          background: none;
          color: white;
        `

export default Setup;