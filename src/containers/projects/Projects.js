import React, { useState, useEffect } from "react";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import "./Project.css";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import { openSource } from "../../portfolio";

export default function Projects() {
  const [repo, setrepo] = useState([]);

  useEffect(() => {
    // Load pinned repositories from Github API
    const client = new ApolloClient({
      uri: "https://api.github.com/graphql",
      request: operation => {
        operation.setContext({
          headers: {
            authorization: `Bearer ${atob(openSource.githubConvertedToken)}`
          }
        });
      }
    });

    client
      .query({
        query: gql`
          {
            user(login: "${openSource.githubUserName}") {
              pinnedItems(first: 6, types: REPOSITORY) {
                nodes {
                  ... on Repository {
                    nameWithOwner
                    description
                    forkCount
                    stargazers {
                      totalCount
                    }
                    url
                    id
                    diskUsage
                    primaryLanguage {
                      name
                      color
                    }
                  }
                }
              }
            }
          }
        `
      })
      .then(result => {
        setrepoFunction(result.data.user.pinnedItems.nodes);
      });

  }, []);

  function setrepoFunction(array) {
    setrepo(array);
  }

  return (
    <div className="main" id="opensource">
      <h1 className="project-title">Projets Open Source</h1>
      <div className="repo-cards-div-main">
        {repo.map((v, i) => {
          return <GithubRepoCard repo={v} key={v.id} />;
        })}
      </div>
      <Button text={"Voir tous les projets"} className="project-button" href={`https://github.com/${openSource.githubUserName}`} newTab={true} />
    </div>
  );
}
