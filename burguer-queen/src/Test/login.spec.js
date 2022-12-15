import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Login from "../views/login/login";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { postLogin } from "../functions/requests";
import React from "react";
import * as router from "react-router";

const setToken_role = jest.fn();
const setCurrenId = jest.fn();

const navigate = jest.fn();
beforeEach(() => {
  jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
});

jest.mock("../functions/requests" /* , () => jest.fn() */);

describe("Test de Login", () => {
  it("ingreso de usuario", async () => {
    const resJson = {
      accessToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdyYWNlLmhvcHBlckBzeXN0ZXJzLnh5eiIsImlhdCI6MTY2OTg1MzMzNSwiZXhwIjoxNjY5ODU2OTM1LCJzdWIiOiIyIn0.dTllOT6Hgeji3huoGIMVw3NIWA3ZpwaSYsvYJqVy1dM",
      user: {
        email: "grace.hopper@systers.xyz",
        role: "admin",
        id: 2,
      },
    };
    const loginUserMock = {
      email: "grace.hopper@systers.xyz",
      password: "123456",
    };

    postLogin./* mockImplementation */ mockResolvedValueOnce(
      Promise.resolve(
        {
          json: () => {
            return Promise.resolve(resJson);
          },
        })
      )
    

    /* mockImplementationOnce */
    //   () => {
    //     console.log("HOLAAAAAAAAAAAA")
    //     return (email, pasword) => {

    //       return Promise.resolve({
    //         json: () => {
    //           return Promise.resolve((resJson) => {
    //             setToken_role(resJson.accessToken, resJson.user.role);
    //           });
    //         },
    //       });
    //     };
    //   }
    // );

    render(<Login />, { wrapper: BrowserRouter });

    const inputEmail = screen.getByTestId("emailUserLogin");
    fireEvent.change(inputEmail, { target: { value: loginUserMock.email } });

    const inputPassword = screen.getByTestId("passwordUserLogin");
    fireEvent.change(inputPassword, {
      target: { value: loginUserMock.password },
    });

    const buttonSubmit = screen.getByTestId("buttonLogin");
    fireEvent.click(buttonSubmit); /// pte para revisar

    await waitFor(() => {
      expect(postLogin).toHaveBeenCalledTimes(1);
      //expect(postLogin).toHaveBeenCalled();
      expect(postLogin).toHaveBeenCalledWith(
        loginUserMock.email,
        loginUserMock.password
      );
      //expect(navigate).toHaveBeenCalledWith("/admin/getUser");
      expect(navigate).toHaveBeenCalledTimes(1);
      expect(setToken_role).toHaveBeenCalledTimes(0);
    });
  });

  it("should render button", () => {
    render(<Login />, { wrapper: BrowserRouter });
    const buttonSubmitGet = screen.getByTestId("buttonLogin");
    expect(buttonSubmitGet).toBeInTheDocument();
  });
});
