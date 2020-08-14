import React from "react";
import { shallow } from "enzyme";
import ProgressCircleTime from "../";

let wrapper: any;

afterEach(() => {
  wrapper.unmount();
});

describe("ProgressCircleTime Default", () => {
  it("Should return the HTML of component", () => {
    wrapper = shallow(
      <ProgressCircleTime
        timeInSeconds={60}
        totalLaps={3}
        onLapInteraction={() => null}
      />,
    );
    expect(wrapper.html().toString()).toBe(
      `<div><svg version="1.1" class="base" viewBox="0 0 50 50"><circle class="path background" cx="25" cy="25" r="20"></circle><circle class="path" cx="25" cy="25" r="20" style="animation:dash 60s linear 3"></circle></svg></div>`,
    );
  });

  describe("animation interactions", () => {
    const update = jest.fn();
    const circleTag = "circle";
    const dataMock = {
      actualLap: 1,
      isFinish: false,
      timeInSeconds: 1,
      totalLaps: 2,
    };

    it("Should return the HTML call on lap interaction", (done) => {
      wrapper = shallow(
        <ProgressCircleTime
          timeInSeconds={dataMock.timeInSeconds}
          totalLaps={dataMock.totalLaps}
          onLapInteraction={update}
        />,
      );
      wrapper.find(circleTag).at(1).props().onAnimationIterationCapture();
      expect(update).toBeCalledWith(dataMock);
      done();
    });

    it("Should return the HTML call on last lap interaction", (done) => {
      wrapper = shallow(
        <ProgressCircleTime
          timeInSeconds={dataMock.timeInSeconds}
          totalLaps={dataMock.totalLaps}
          onLapInteraction={update}
        />,
      );

      wrapper.find(circleTag).at(1).props().onAnimationEnd();
      expect(update).toBeCalledWith({ ...dataMock, isFinish: true });
      done();
    });
  });

  it("Should return the HTML empty", () => {
    wrapper = shallow(
      <ProgressCircleTime
        timeInSeconds={60}
        totalLaps={3}
        onLapInteraction={() => null}
        isRefresh={true}
      />,
    );
    expect(wrapper.html()).toEqual(`<div></div>`);
  });
});
