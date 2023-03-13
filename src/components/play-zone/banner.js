import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { gameDetails } from "../../config/gameId";

export const WinoBanner = () => {
  /**
   * Author: Ranjith S
   * setting common variable to login / logout
   */
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();
 
  const data = gameDetails;
  const handleAnchorClick = event => {
    event.preventDefault();
    let playerUrlData;
    playerUrlData = event.currentTarget.href;
    console.log(playerUrlData)
   
  };

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="page-content">
              <div
                id="carouselExampleAutoplaying"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item">
                    <img src="../assets/img/slider.jpg" />
                  </div>
                  <div class="carousel-item active">
                    <img src="../assets/img/bg2.jpg" />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>

              <div class="most-popular">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="heading-section">
                      <h4>
                        <em>Most Popular</em> Right Now 
                      </h4>
                    </div>
                    <div class="row">
                      <>
                        {data && data.map((gameItems) => (
                          <>
                            {gameItems.gameList.map((gameData) => (
                              <div class="col-lg-2 col-sm-6">
                                <div class="item">
                                  <img
                                    src={`https://api.prerelease-env.biz/game_pic/rec/325/${gameData.gameID}.png`}
                                    alt=""
                                  />
                                  <h4>
                                    <div class="main-button">
                                      <a
                                        href={`https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=${gameData.gameID}&lang=en&stylename=lp_wino123com`}
                                        onclick="window.open('index.html','_self'); parent.document.getElementById('playGameIframe')">
                                        Try now
                                      </a>
                                      
                                      <span>{gameData.gameName}</span>
                                    </div>
                                    
                                  </h4>
                                </div>
                              </div>
                            ))}
                          </>
                        ))}
                      </>
                      <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            
          <iframe id="playGameIframe"> </iframe>
                                
          </div>
        </div>
      </div>
    </div>
                      <div class="col-lg-12">
                        <div class="main-button">
                          <a href="browse.html">Discover Popular</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {isAuthenticated && (
                <div class="gaming-library">
                  <div class="col-lg-12">
                    <div class="heading-section">
                      <h4>
                        <em>Your Gaming</em> Library
                      </h4>
                    </div>
                    <div class="item">
                      <ul>
                        <li>
                          <img
                            src="https://api.prerelease-env.biz/game_pic/square/200/vpdr7.png"
                            alt=""
                            class="templatemo-item"
                          />
                        </li>
                        <li>
                          <h4>Dota 2</h4>
                          <span>Sandbox</span>
                        </li>
                        <li>
                          <h4>Date Added</h4>
                          <span>24/08/2036</span>
                        </li>
                        <li>
                          <h4>Hours Played</h4>
                          <span>634 H 22 Mins</span>
                        </li>
                        <li>
                          <h4>Currently</h4>
                          <span>Downloaded</span>
                        </li>
                        <li>
                          <div class="main-border-button border-no-active">
                            <a href="#">Play now</a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="item">
                      <ul>
                        <li>
                          <img
                            src="https://api.prerelease-env.biz/game_pic/square/200/vplobby.png"
                            alt=""
                            class="templatemo-item"
                          />
                        </li>
                        <li>
                          <h4>Fortnite</h4>
                          <span>Sandbox</span>
                        </li>
                        <li>
                          <h4>Date Added</h4>
                          <span>22/06/2036</span>
                        </li>
                        <li>
                          <h4>Hours Played</h4>
                          <span>740 H 52 Mins</span>
                        </li>
                        <li>
                          <h4>Currently</h4>
                          <span>Downloaded</span>
                        </li>
                        <li>
                          <div class="main-border-button">
                            <a href="#">Play now</a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="item last-item">
                      <ul>
                        <li>
                          <img
                            src="https://api.prerelease-env.biz/game_pic/square/200/vpmr9.png"
                            alt=""
                            class="templatemo-item"
                          />
                        </li>
                        <li>
                          <h4>CS-GO</h4>
                          <span>Sandbox</span>
                        </li>
                        <li>
                          <h4>Date Added</h4>
                          <span>21/04/2036</span>
                        </li>
                        <li>
                          <h4>Hours Played</h4>
                          <span>892 H 14 Mins</span>
                        </li>
                        <li>
                          <h4>Currently</h4>
                          <span>Downloaded</span>
                        </li>
                        <li>
                          <div class="main-border-button border-no-active">
                            <a href="#">Play now</a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="main-button">
                      <a href="profile.html">View Your Library</a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
