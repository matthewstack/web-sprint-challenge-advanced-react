import React from "react";
import MutationObserver from "mutationobserver-shim";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
  render(<CheckoutForm />);
});

test("shows success message on submit with form details", async () => {
  render(<CheckoutForm />);

  const firstName = screen.getByLabelText(/First Name:/i);
  userEvent.type(firstName, "Bill");
  const lastName = screen.getByLabelText(/Last Name:/i);
  userEvent.type(lastName, "Clinton");
  const addressInput = screen.getByLabelText(/Address:/i);
  userEvent.type(addressInput, "1892 South Street");
  const cityInput = screen.getByLabelText(/City:/i);
  userEvent.type(cityInput, "Miami");
  const stateInput = screen.getByLabelText(/State:/i);
  userEvent.type(stateInput, "Florida");
  const zipInput = screen.getByLabelText(/Zip:/i);
  userEvent.type(zipInput, "22832");
  const button = screen.getByRole(/button/i);
  userEvent.click(button);

  const checkoutMsg = await screen.findByTestId(/successMessage/i);

  expect(checkoutMsg).toBeInTheDocument();
  //   expect(checkoutMsg).toHaveTextContent(/Bill Clinton/i);
});
