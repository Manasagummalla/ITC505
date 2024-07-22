.#include <iostream>
using namespace std;

// Define the structure for a Linked List node
struct Node
{
    int data;
    Node *next;
};

// Function to create a new node
Node *createNode(int data)
{
    Node *newNode = new Node();
    newNode->data = data;
    newNode->next = nullptr;
    return newNode;
}

// Function to insert a new element at the end of the Linked List
void insertAtEnd(Node *&head, int data)
{
    Node *newNode = createNode(data);
    if (head == nullptr)
    {
        head = newNode;
    }
    else
    {
        Node *temp = head;
        while (temp->next != nullptr)
        {
            temp = temp->next;
        }
        temp->next = newNode;
    }
    cout << "Inserted: " << data << endl;
}

// Function to print the last element of the Linked List
void printLastElement(Node *head)
{
    if (head == nullptr)
    {
        cout << "List is empty." << endl;
        return;
    }
    Node *temp = head;
    while (temp->next != nullptr)
    {
        temp = temp->next;
    }
    cout << "Last element: " << temp->data << endl;
}

// Function to search for an element in the Linked List
bool searchElement(Node *head, int data)
{
    Node *temp = head;
    while (temp != nullptr)
    {
        if (temp->data == data)
        {
            return true;
        }
        temp = temp->next;
    }
    return false;
}

// Main function
int main()
{
    Node *head = nullptr;
    int numInsertions, numSearches;

    // Step 1: Scan the number of elements to insert into the Linked List
    cout << "Enter the number of elements to insert: ";
    cin >> numInsertions;

    // Step 2: Insert the elements into the Linked List
    for (int i = 0; i < numInsertions; ++i)
    {
        int element;
        cout << "Enter element " << i + 1 << ": ";
        cin >> element;
        insertAtEnd(head, element);
        // Step 4: Print the last element in the Linked List after each insertion
        printLastElement(head);
    }

    // Step 5: Scan the number of elements to search in the Linked List
    cout << "Enter the number of elements to search: ";
    cin >> numSearches;

    // Step 6: Perform search for elements within the Linked List
    for (int i = 0; i < numSearches; ++i)
    {
        int searchElementData;
        cout << "Enter element to search " << i + 1 << ": ";
        cin >> searchElementData;
        if (searchElement(head, searchElementData))
        {
            cout << searchElementData << " found in the list." << endl;
        }
        else
        {
            cout << searchElementData << " not found in the list." << endl;
        }
    }

    // Cleanup: Free the memory allocated for the Linked List
    Node *current = head;
    while (current != nullptr)
    {
        Node *next = current->next;
        delete current;
        current = next;
    }

    return 0;
}