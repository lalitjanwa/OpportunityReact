import { LightningElement, wire, api } from 'lwc';
import fetchOpportunitiesWithQuotesAndItems from '@salesforce/apex/AccountOpportunityDataController.getOpportunitiesWithQuotesAndItems';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';
import REACT from '@salesforce/resourceUrl/react';

const MyReactComponent = ({ opportunityRecords }) => {

    const header = {
        textAlign: 'center',
        padding: '8px',
        fontSize: '1.3em',
        fontWeight: '600',
        marginTop: '0px',
    }

    const opportunityNameStyle = {
        fontSize: '1.1em',
        color: '#2c3e50',
        fontWeight: 'bold',
    };

    const quoteBox = {
        width: '104%',
        marginLeft: '-2%',
        marginTop: '2%',
    }
    
    const messageText = {
        fontSize: '13px',
        textAlign : 'center'
    }

    const titleName = {
        fontSize: '12px'
    }

    const hrTag = {
        width: '104%',
        marginLeft: '-8px'
    }

    const thStyle = {
        width: '25%',
    }

    const textHeadCenter = {
        textAlign: 'center',
        padding: '3px'
    }

    const textCenter = {
        textAlign: 'center'
    }

    return React.createElement('div', {className: 'slds-card'}, 
        React.createElement('div', null,
            React.createElement('div', {  style : header }, 'Opportunity Quote Lines'),
            React.createElement('div', {className : 'slds-border_top'},
                opportunityRecords && opportunityRecords.length > 0 ? (
                    // Loop to show opportunities with Quotes
                    opportunityRecords.map(opportunity => 
                        React.createElement('div', { key: opportunity.Id, className: 'slds-box' }, 
                            React.createElement('h1', {className: 'slds-text-title_bold', style : opportunityNameStyle}, opportunity.Name),
                            React.createElement('div', { className : 'slds-grid slds-m-top_xx-small' },
                                React.createElement('div', {className: 'slds-col slds-size_2-of-4 slds-p-right_x-small'},
                                    React.createElement('div', { className : 'slds-border_bottom slds-p-vertical_x-small' },
                                        React.createElement('div', {className: 'slds-text-title_bold', style : titleName}, 'Stage Name :'),
                                        React.createElement('div', {className: 'slds-text-body_small'}, `${opportunity.StageName}`),
                                    ),
                                ),
                                React.createElement('div', {className: 'slds-col slds-size_2-of-4 slds-p-left_x-small'},
                                    React.createElement('div', { className : 'slds-border_bottom slds-p-vertical_x-small' },
                                        React.createElement('div', {className: 'slds-text-title_bold', style : titleName}, 'Close Date :'),
                                        React.createElement('div', {className: 'slds-text-body_small'}, `${opportunity.CloseDate}`),
                                    ),
                                )
                            ),
                            React.createElement('div', { className : 'slds-grid slds-m-top_xx-small' },
                                React.createElement('div', {className: 'slds-col slds-size_2-of-4 slds-p-right_x-small'},
                                    React.createElement('div', { className : 'slds-border_bottom slds-p-vertical_x-small' },
                                        React.createElement('div', {className: 'slds-text-title_bold', style : titleName}, 'Amount :'),
                                        React.createElement('div', {className: 'slds-text-body_small'}, `${opportunity.Amount ? `$${opportunity.Amount.toLocaleString()}` : 'N/A'}`),
                                    ),
                                ),
                                React.createElement('div', {className: 'slds-col slds-size_2-of-4 slds-p-left_x-small'},
                                    React.createElement('div', { className : 'slds-border_bottom slds-p-vertical_x-small' },
                                        React.createElement('div', {className: 'slds-text-title_bold', style : titleName}, 'Type:'),
                                        React.createElement('div', {className: 'slds-text-body_small'}, `${opportunity.Type}`),
                                    ),
                                )
                            ),
                            // Quote check and Loop to show Quotes with Quote Line Items
                            opportunity.Quotes && opportunity.Quotes.length > 0 ? (
                                React.createElement('div', { className: 'slds-box', style : quoteBox },
                                    React.createElement('div', null,
                                        opportunity.Quotes.map((quote, index) => 
                                            React.createElement('div', { 
                                                    className: `${index > 0 ? 'slds-m-top_x-small' : ''}` 
                                                }, 
                                                React.createElement('div', { className: `slds-text-title_bold ${index !== opportunity.Quotes.length - 1 ? 'slds-m-bottom_x-small' : ''}` }, `Q. : ${quote.Name}`),

                                                React.createElement('div', { className : 'slds-grid slds-m-top_xx-small' },
                                                    React.createElement('div', {className: 'slds-col slds-size_2-of-4 slds-p-right_x-small'},
                                                        React.createElement('div', { className : 'slds-border_bottom slds-p-vertical_x-small' },
                                                            React.createElement('div', {className: 'slds-text-title_bold', style : titleName}, 'Quote Number :'),
                                                            React.createElement('div', {className: 'slds-text-body_small'}, `${quote.QuoteNumber}`),
                                                        ),
                                                    ),
                                                    React.createElement('div', {className: 'slds-col slds-size_2-of-4 slds-p-left_x-small'},
                                                        React.createElement('div', { className : 'slds-border_bottom slds-p-vertical_x-small' },
                                                            React.createElement('div', {className: 'slds-text-title_bold', style : titleName}, 'Status :'),
                                                            React.createElement('div', {className: 'slds-text-body_small'}, `${quote.Status}`),
                                                        ),
                                                    )
                                                ),

                                                React.createElement('div', { className : 'slds-grid slds-m-top_xx-small' },
                                                    React.createElement('div', {className: 'slds-col slds-size_2-of-4 slds-p-right_x-small'},
                                                        React.createElement('div', { className : 'slds-border_bottom slds-p-vertical_x-small' },
                                                            React.createElement('div', {className: 'slds-text-title_bold', style : titleName}, 'Expiration Date :'),
                                                            React.createElement('div', {className: 'slds-text-body_small'}, `${quote.ExpirationDate}`),
                                                        ),
                                                    ),
                                                    React.createElement('div', {className: 'slds-col slds-size_2-of-4 slds-p-left_x-small'},
                                                        React.createElement('div', { className : 'slds-border_bottom slds-p-vertical_x-small' },
                                                            React.createElement('div', {className: 'slds-text-title_bold', style : titleName}, 'Email :'),
                                                            React.createElement('div', {className: 'slds-text-body_small'}, `${quote.Email}`),
                                                        ),
                                                    )
                                                ),
                                                // Quote Line Item check and Loop to show Quote Line Items in table
                                                quote.QuoteLineItems && quote.QuoteLineItems.length > 0 ? (
                                                    React.createElement('div', null,
                                                        React.createElement('table', {className : 'slds-table slds-table_bordered slds-table_resizable-cols'}, 
                                                            React.createElement('thead', null, 
                                                                React.createElement('tr', {className : 'slds-line-height_reset'},
                                                                    React.createElement('th', {style : thStyle }, 
                                                                        React.createElement('div', {className : 'slds-cell-wrap', style : textHeadCenter}, 'Product Name')
                                                                    ),
                                                                    React.createElement('th',  {style : thStyle}, 
                                                                        React.createElement('div', {className : 'slds-cell-wrap', style : textHeadCenter}, 'Quantity')
                                                                    ),
                                                                    React.createElement('th',  {style : thStyle}, 
                                                                        React.createElement('div', {className : 'slds-cell-wrap', style : textHeadCenter}, 'Unit Price')
                                                                    ),
                                                                    React.createElement('th',  {style : thStyle}, 
                                                                        React.createElement('div', {className : 'slds-cell-wrap', style : textHeadCenter}, 'Total Price')
                                                                    )
                                                                )
                                                            ),
                                                            React.createElement('tbody', null, 
                                                                quote.QuoteLineItems.map(quoteLine =>
                                                                    React.createElement('tr', {className : 'slds-hint-parent'},
                                                                        React.createElement('td', null,
                                                                            React.createElement('div', {style : textCenter}, `${quoteLine.Product2.Name}`)
                                                                        ),
                                                                        React.createElement('td', null,
                                                                            React.createElement('div', {style : textCenter}, `${quoteLine.Quantity}`)
                                                                        ),
                                                                        React.createElement('td', null,
                                                                            React.createElement('div', {style : textCenter}, `$${quoteLine.UnitPrice}`)
                                                                        ),
                                                                        React.createElement('td', null,
                                                                            React.createElement('div', {style : textCenter}, `$${quoteLine.TotalPrice}`)
                                                                        )
                                                                    )  
                                                                )
                                                            )
                                                        )
                                                    )
                                                ) : (
                                                    React.createElement('div', {className : 'slds-align_absolute-center slds-text-title_bold slds-m-top_x-small', style : messageText}, 'No Quotes Lines available for this Quote.')
                                                ),
                                                index < opportunity.Quotes.length - 1 && 
                                                React.createElement('div', { className: 'slds-border_bottom slds-m-top_x-small', style: hrTag }, '')
                                            )
                                        )
                                    )
                                )
                            ) : (
                                React.createElement('div', {className : 'slds-align_absolute-center slds-text-title_bold slds-m-top_x-small', style : messageText}, 'No Quotes available for this opportunity.')
                            )
                        )
                    )
                ) : (
                    React.createElement('div', {className : 'slds-align_absolute-center slds-text-title_bold slds-m-top_x-small', style : messageText}, 'No Opportunity Records are available for this Account.')
                ),
            )
        )
    )       
};

export default class OppQuoteReactComponent extends LightningElement {

    @api recordId;
    opportunitiesWithQuotesAndItems;

    connectedCallback() {
        Promise.all([
            loadScript(this, REACT + '/react/react.min.js'),
            loadScript(this, REACT + '/react/react-dom.js')
        ])
        .then(() =>  this.fetchOppData())
        .catch(error => console.error(error));
    }

    // Method to fetch Opportunity Data and Render the Opp
    fetchOppData(){
        fetchOpportunitiesWithQuotesAndItems({ accountId: this.recordId })
		.then(result => {
            this.opportunitiesWithQuotesAndItems = JSON.parse(JSON.stringify(result));
            //loop to set first Quote for each Opportunity and Product Name inside Quote Line Items.
            this.opportunitiesWithQuotesAndItems.forEach(opp => {
                opp.firstQuoteId = null;
                if(opp.Quotes){
                    opp.Quotes.forEach(quote => {
                        if(quote.QuoteLineItems){
                            quote.QuoteLineItems = quote.QuoteLineItems.map(item => {
                                return {
                                    ...item,
                                    productName: item.Product2 && item.Product2.Name ? item.Product2.Name : ''
                                };
                            });
                        }
                    });
                }
            });
            
            this.initializeReactComponent();
		})
		.catch(error => {
            console.log('error >> ', error);
		})
    }

    //Method to call React and Render React Component
    initializeReactComponent(){
        try{
            const reactContainer = document.createElement('div');
            this.template.querySelector('.reactContainer').appendChild(reactContainer);

            // Render the React component
            ReactDOM.render(
                React.createElement(MyReactComponent, { opportunityRecords: this.opportunitiesWithQuotesAndItems }),
                reactContainer
            );
        } catch(ex){
            console.log(ex);
        }
    }
}