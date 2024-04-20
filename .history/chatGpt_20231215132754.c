#include <stdio.h>
#include <stdlib.h>

#define MAX_CITIES 20

int graph[MAX_CITIES][MAX_CITIES];
int visited[MAX_CITIES];
int n; // Number of cities

void createGraph() {
    int i, j;

    printf("Enter the number of cities: ");
    scanf("%d", &n);

    printf("Enter the adjacency matrix for the graph:\n");
    for (i = 0; i < n; i++) {
        printf("Enter row %d: ", i + 1);
        for (j = 0; j < n; j++) {
            scanf("%d", &graph[i][j]);
        }
    }
}

void initializeVisited() {
    for (int i = 0; i < n; i++) {
        visited[i] = 0;
    }
}

void bfs(int start) {
    int queue[MAX_CITIES], front = -1, rear = -1, i, current;

    printf("Nodes reachable from starting city %d using BFS: ", start);
    printf("%d ", start);
    visited[start] = 1;
    queue[++rear] = start;

    while (front != rear) {
        current = queue[++front];
        for (i = 0; i < n; i++) {
            if (graph[current][i] == 1 && !visited[i]) {
                printf("%d ", i);
                visited[i] = 1;
                queue[++rear] = i;
            }
        }
    }

    printf("\n");
}

void dfs(int vertex) {
    int i;

    visited[vertex] = 1;
    printf("%d ", vertex);

    for (i = 0; i < n; i++) {
        if (graph[vertex][i] == 1 && !visited[i]) {
            dfs(i);
        }
    }
}

int isConnected() {
    int i;

    initializeVisited();

    // Find the first non-zero degree vertex
    for (i = 0; i < n; i++) {
        if (graph[i][0] == 1) {
            break;
        }
    }

    // If all vertices have a non-zero degree, the graph is connected
    return i == n;
}

int main() {
    int choice, start;

    createGraph();

    do {
        printf("\n1. Print all nodes reachable from a given starting city using BFS\n");
        printf("2. Check whether the graph is connected using DFS\n");
        printf("3. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("Enter the starting city for BFS: ");
                scanf("%d", &start);
                initializeVisited();
                bfs(start);
                break;

            case 2:
                if (isConnected()) {
                    printf("The graph is connected.\n");
                } else {
                    printf("The graph is not connected.\n");
                }
                break;

            case 3:
                exit(0);

            default:
                printf("Invalid choice. Please enter a valid option.\n");
        }
    } while (1);

    return 0;
}
