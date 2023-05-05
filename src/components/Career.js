import React from "react";
import styled from "styled-components";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIconSvg from "../assets/images/svg/workIcon.svg";
import SchoolIconSvg from "../assets/images/svg/schoolIcon.svg";
import careerElements from "../data/careerElements";
import { navigate } from "gatsby";
export default function Career() {
  return (
    <CareerContainer id="career">
      <CareerHeading>Career</CareerHeading>
      <CareerWrapper>
        <VerticalTimeline>
          {careerElements.map((element) => {
            let isWorkIcon = element.icon === "work";
            return (
              <CareerTimelineElement
                key={element.id}
                date={element.date}
                dateClassName="date"
                icon={
                  isWorkIcon ? (
                    <img src={WorkIconSvg} alt="workIcon" />
                  ) : (
                    <img src={SchoolIconSvg} alt="schoolIcon" />
                  )
                }
                onTimelineElementClick={() => navigate(element.redirectLink)}
              >
                <h3 className="vertical-timeline-element-title">
                  {element.title}
                </h3>
                <h5 className="vertical-timeline-element-subtitle">
                  {element.subtitle}
                </h5>
                <p id="description">
                  {element.list && element.list.map((abc) => <p>{abc}</p>)}
                </p>
              </CareerTimelineElement>
            );
          })}
        </VerticalTimeline>
      </CareerWrapper>
    </CareerContainer>
  );
}

const CareerHeading = styled.div`
  margin-top: 30px;
  color: ${({ theme: { colors } }) => colors.primary};
  font-weight: 700;
  font-size: clamp(2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 1rem;
`;

const CareerContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw-1300px) / 2);

  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-margin-top: 80px;
`;

const CareerWrapper = styled.div`
  display: flex;
  z-index: 1;
  height: 100%;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

const CareerTimelineElement = styled(VerticalTimelineElement)`
  color: ${({ theme: { colors } }) => colors.tertiary};
  cursor: pointer;
  filter: brightness(100%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    filter: brightness(120%);
  }
  .vertical-timeline-element-content {
    box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.25),
      0 0.4em 1.25em 0 rgba(0, 0, 0, 0.15) !important;
    padding: 1em 2em !important;
    background-color: ${({ theme: { colors } }) => colors.secondary};
    border-radius: 1.5em;
  }
  .vertical-timeline-element-content-arrow {
    top: 22px !important;
    border: 7px solid transparent;
    border-right: 7px solid ${({ theme: { colors } }) => colors.secondary};
  }
  .vertical-timeline-element-icon {
    background-color: ${({ theme: { colors } }) => colors.secondary} !important;
  }
  .vertical-timeline-element-subtitle {
    padding-top: 5px;
    font-size: 1.2em;
    font-style: italic;
  }
  .vertical-timeline-element-title {
    color: ${({ theme: { colors } }) => colors.primary};
    font-size: 1.5em;
  }
`;
