import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const WinoHeader = () => {
  /**
   * Author: Ranjith S
   * setting common variable to login / logout
   */
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();

  return (
    <>
      <header class="header-area header-sticky">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <nav class="main-nav">
                <a href="index.html" class="logo">
                  <img src="./assets/img/logo.png" alt="" />
                </a>

                <div class="search-input">
                  <form id="search" action="#">
                    <input
                      type="text"
                      placeholder="Type Something"
                      id="searchText"
                      name="searchKeyword"
                      onkeypress="handle"
                    />
                    <i class="fa fa-search"></i>
                  </form>
                </div>

                <ul class="nav">
                  <li>
                    <a href="#" class="active">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Casino</a>
                  </li>
                  <li>
                    <a href="#">LiveCasino</a>
                  </li>
                  {isAuthenticated ? (
                    <li class="profileOverlay">
                      <div class="dropdown">
                        <a class="dropbtn">Player: {user.nickname}</a>
                        <div class="dropdown-content">
                          <ul>
                            <li><i class="fas fa-wallet"><a href="#">Credit: 10,000</a></i></li>
                            <li><i class="fas fa-user"><a href="#">Profile</a></i></li>
                            <li><i class="fas fa-sign-out-alt"><a
                          href="#"
                          onClick={() =>
                            logout({
                              logoutParams: {
                                returnTo: window.location.origin,
                              },
                            })
                          }
                        >
                          Logout
                        </a></i></li>
                          </ul>
                          </div>
                      </div>
                    </li>
                  ) : (
                    <li>
                      <div class="login-btn">
                        <a href="#" onClick={() => loginWithRedirect()}>
                          Login
                        </a>
                      </div>
                    </li>
                  )}

                </ul>
                <a class="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
