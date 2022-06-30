import React from "react"
import { AccountsQuery, NerdGraphQuery, Spinner, Button, Form, TextField, nerdlet, PlatformStateContext, Table, TableHeader, TableHeaderCell, TableRow, TableRowCell } from "nr1"
import { CreateDropRule, DeleteDropRule, ListDropRules } from "./utils"

export default class DropRules extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nrql: null,
            description: null
        }
        
        this.resetState = this.resetState.bind(this)
    }

    resetState() {
        this.setState({
            nrql: null,
            description: null
        })
    }

    componentDidMount() {
        // if i decide i need the accountId of the logged in user,
        // as opposed to the id of the account selected in the dropdown list, i can do this:
        // AccountsQuery.query().then(({ data }) => this.setState({accountId: data[0].id}))

        nerdlet.setConfig({
            accountPicker: true,
            timePicker: false,
        })
    }

    tableClickActions(accountId, refetch) {
        return [
            {
                label: 'Delete Drop Rule',
                type: TableRow.ACTION_TYPE.DESTRUCTIVE,
                onClick: (evt, { item, index }) => {
                    DeleteDropRule(accountId, item.id).then(refetch);
                }
            }
        ]
    }

    render() {
        const styles = {
            bigTextBox: {
                width: "700px",
                fontSize: 20,
                lineHeight: "35px"
            }
        }

        return (
            <PlatformStateContext.Consumer>
                {(platformState) => {
                    if (platformState && !isNaN(platformState.accountId)) {
                        return (
                            <NerdGraphQuery query={ListDropRules(platformState.accountId)}>
                                {({ loading, error, data, refetch }) => {
                                    if (loading) {
                                        return <Spinner />
                                    }
                                    
                                    if (error) {
                                        return <h2>Choose an account from the drop-down list.</h2>
                                    }

                                    let rules = data.actor.account.nrqlDropRules.list.rules.map(rule => ({
                                        id: rule.id,
                                        Rule: rule.nrql,
                                        Description: rule.description,
                                        Creator: rule.creator.email
                                    }))

                                    return (
                                        <>
                                            <Table items={rules}>
                                                <TableHeader>
                                                    <TableHeaderCell value={({ item }) => item.Rule}>
                                                        Rule
                                                    </TableHeaderCell>
                                                    <TableHeaderCell value={({ item }) => item.Description}>
                                                        Description
                                                    </TableHeaderCell>
                                                    <TableHeaderCell value={({ item }) => item.Creator}>
                                                        Creator
                                                    </TableHeaderCell>
                                                </TableHeader>

                                                {({ item }) => (
                                                <TableRow actions={this.tableClickActions(platformState.accountId, refetch)}>
                                                    <TableRowCell>{item.Rule}</TableRowCell>
                                                    <TableRowCell>{item.Description}</TableRowCell>
                                                    <TableRowCell>{item.Creator}</TableRowCell>
                                                </TableRow>
                                                )}
                                            </Table>
                                            <p>&nbsp;</p>
                                            <hr />
                                            {data.actor.account.nrqlDropRules.list.rules.length == 0 && <h2>No rules found for account {platformState.accountId}</h2>}
                                            <p>&nbsp;</p>
                                            <p>&nbsp;</p>
                                            <h3>Create Drop Rule</h3>
                                            <p>&nbsp;</p>
                                            <Form>
                                                <TextField style={styles.bigTextBox} label="NRQL" onChange={event => {this.setState({ nrql: event.target.value })}} />
                                                <TextField style={styles.bigTextBox} label="Description" onChange={event => {this.setState({ description: event.target.value })}} />
                                                <Button type={Button.TYPE.PRIMARY} onClick={() => CreateDropRule(platformState.accountId, this.state.description, this.state.nrql, refetch, this.resetState)}>Create Drop Rule</Button>
                                            </Form>
                                            {/* NRQL<br />
                                            <input type="text" style={styles.bigTextBox} onChange={event => {this.setState({ nrql: event.target.value })}}></input>
                                            <br /><br />
                                            Description<br />
                                            <input type="text" style={styles.bigTextBox} onChange={event => {this.setState({ description: event.target.value })}}></input>
                                            <br /><br />
                                            <button onClick={() => CreateDropRule(platformState.accountId, this.state.description, this.state.nrql, refetch, this.resetState)}>Create Drop Rule</button> */}
                                        </>
                                    )
                                }}
                            </NerdGraphQuery>
                        )
                    }
                }}
            </PlatformStateContext.Consumer>
        )
    }
}
