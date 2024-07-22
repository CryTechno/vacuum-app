import { HowItWorkContent } from "../../_mock";
import Layout from "./layout";
import {RowConnector, ArrowRight} from "../../icons";
import React from 'react';
import {HowItWorkProps} from "@/types/uiPropsTypes/ui";

const HowItWorkCards = () => {
  const rows = (cards: HowItWorkProps[]) => {
    const result = [];
    for (let i = 0; i < cards.length; i += 3) {
      result.push(cards.slice(i, i + 3));
    }
    return result;
  }

  const listHowItWork = (cards: HowItWorkProps[]) => {
      return (
          <div className="flex-col flex-wrap mt-[42px]">
              {rows(cards).map((row, rowIndex) => (
                  <div className="flex relative flex-wrap justify-center gap-[92px]" style={{marginTop: `${rowIndex>0 ? 92 : 0 }px`}} key={rowIndex}>
                    {row.map((card, cardIndex) => (
                      <div key={cardIndex}>
                        <Layout key={cardIndex} id={card.id} content={card.content} />
                        {cardIndex < row.length - 1 && <ArrowRight index = {cardIndex}  rowIndex = {rowIndex}/>}
                      </div>
                    ))
                    }
                    {rowIndex < rows(cards).length - 1 && <RowConnector rowIndex = {rowIndex} />}            
                    </div>
              ))
              }
          </div>
      )
  }

  return (
    <div className="">
      {listHowItWork(HowItWorkContent)}

      </div>
  )
}

export default HowItWorkCards